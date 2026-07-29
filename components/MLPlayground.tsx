"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Play, Sliders, CheckCircle2, AlertTriangle, Layers, Activity, Sparkles } from "lucide-react";

interface ModelPreset {
  id: string;
  name: string;
  category: string;
  architecture: string;
  inputSamples: { label: string; simulatedScore: number; isFlagged: boolean; note: string }[];
  layers: string[];
}

const modelPresets: ModelPreset[] = [
  {
    id: "deepdetector",
    name: "DeepDetector (Bi-LSTM + GRU)",
    category: "Computer Vision · Temporal Sequence Analysis",
    architecture: "YOLO Face Crop → Feature Embedding → Bi-LSTM → GRU → Sigmoid",
    layers: ["Frame Extractor (YOLO)", "ResNet Feature Embeddings", "Bi-LSTM Temporal Encoder", "GRU Sequence Pooling", "Sigmoid Classifier"],
    inputSamples: [
      { label: "Sample Frame A (Authentic Camera)", simulatedScore: 0.04, isFlagged: false, note: "Natural facial compression & eye blinking frequency verified" },
      { label: "Sample Frame B (AI Face Swap)", simulatedScore: 0.96, isFlagged: true, note: "High temporal artifact anomaly detected across frame boundaries" },
      { label: "Sample Frame C (Diffusion Artifacts)", simulatedScore: 0.89, isFlagged: true, note: "Unnatural hair boundary boundary spectrum anomalies" },
    ],
  },
  {
    id: "attentiomate",
    name: "AttentioMate (YOLO Child Safety)",
    category: "Computer Vision · Object Detection",
    architecture: "Webcam Stream → YOLO Face Detector → Emotion Classifier → Safety Trigger",
    layers: ["Webcam Ingestion", "YOLO Face Detection", "Emotion Bounding Box Classification", "Temporal Majority Vote", "Alert Dispatcher"],
    inputSamples: [
      { label: "Child Stream (Attentive & Calm)", simulatedScore: 0.12, isFlagged: false, note: "Neutral emotion state with stable eye gaze" },
      { label: "Child Stream (Distress / Crying)", simulatedScore: 0.84, isFlagged: true, note: "High emotion confidence for facial distress indicators" },
    ],
  },
  {
    id: "easyllm",
    name: "EasyLLM (Offline RAG Vector Search)",
    category: "GenAI · Local RAG Pipeline",
    architecture: "PDF Ingestion → Token Chunking → ChromaDB Search → Llama-3 Context Injection",
    layers: ["PDF Reader (PyPDF2)", "Recursive Token Splitter", "Chroma Vector Embeddings", "Top-K Retriever (k=3)", "Local Ollama Llama-3"],
    inputSamples: [
      { label: "Doc Query: 'What is the system latency?'", simulatedScore: 0.92, isFlagged: false, note: "Retrieved 3 matching vector chunks with cosine similarity > 0.88" },
      { label: "Doc Query: 'Unrelated random text search'", simulatedScore: 0.28, isFlagged: false, note: "Low similarity score; fallback context triggered" },
    ],
  },
];

export default function MLPlayground() {
  const [selectedModel, setSelectedModel] = useState<ModelPreset>(modelPresets[0]);
  const [selectedSampleIndex, setSelectedSampleIndex] = useState(0);
  const [threshold, setThreshold] = useState(0.70);
  const [isRunning, setIsRunning] = useState(false);
  const [activeLayerIndex, setActiveLayerIndex] = useState<number | null>(null);

  const currentSample = selectedModel.inputSamples[selectedSampleIndex] || selectedModel.inputSamples[0];
  const confidenceScore = currentSample.simulatedScore;
  const isFlagged = confidenceScore >= threshold;

  const runSimulation = () => {
    setIsRunning(true);
    setActiveLayerIndex(0);

    // Cycle through layers to simulate real pipeline execution
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current < selectedModel.layers.length) {
        setActiveLayerIndex(current);
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setActiveLayerIndex(null);
      }
    }, 250);
  };

  return (
    <section id="playground" className="py-24 relative bg-surface-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-mono font-semibold">
            <Sparkles size={14} /> Interactive Engineering Sandbox
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-text-primary">
            Test Machine Learning Pipelines Live
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Select one of my custom machine learning architectures below to inspect model layers, adjust confidence thresholds, and simulate real-time inference logic.
          </p>
        </div>

        {/* Main Simulator Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-surface-border space-y-8">
          
          {/* Model Selector Tabs */}
          <div className="flex flex-wrap items-center gap-3 pb-6 border-b border-surface-border">
            {modelPresets.map((model) => (
              <button
                key={model.id}
                onClick={() => {
                  setSelectedModel(model);
                  setSelectedSampleIndex(0);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                  selectedModel.id === model.id
                    ? "bg-accent text-surface shadow-lg shadow-accent/20"
                    : "bg-surface-elevated text-text-secondary border border-surface-border hover:border-accent/40 hover:text-text-primary"
                }`}
              >
                <Cpu size={14} />
                {model.name}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls Column */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <span className="text-[11px] font-mono text-accent uppercase tracking-wider block mb-1">
                  {selectedModel.category}
                </span>
                <h3 className="text-xl font-bold font-display text-text-primary">
                  {selectedModel.name}
                </h3>
              </div>

              {/* Sample Input Selection */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-text-muted flex items-center justify-between">
                  <span>Select Test Input Stream:</span>
                  <span className="text-accent font-semibold">{currentSample.label}</span>
                </label>
                <div className="space-y-2">
                  {selectedModel.inputSamples.map((sample, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedSampleIndex(idx)}
                      className={`w-full text-left p-3 rounded-xl border text-xs font-mono transition-all flex items-center justify-between ${
                        selectedSampleIndex === idx
                          ? "bg-accent/10 border-accent text-text-primary"
                          : "bg-surface-elevated/60 border-surface-border text-text-secondary hover:border-surface-border/80"
                      }`}
                    >
                      <span className="truncate">{sample.label}</span>
                      <span className="text-accent font-bold ml-2">{(sample.simulatedScore * 100).toFixed(0)}%</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Confidence Threshold Slider */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-text-muted flex items-center gap-1.5">
                    <Sliders size={13} className="text-accent" /> Decision Confidence Threshold:
                  </span>
                  <span className="text-accent font-bold font-mono">{(threshold * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range"
                  min="0.10"
                  max="0.95"
                  step="0.05"
                  value={threshold}
                  onChange={(e) => setThreshold(parseFloat(e.target.value))}
                  className="w-full h-2 bg-surface-elevated rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[10px] font-mono text-text-muted">
                  <span>0% (Permissive)</span>
                  <span>50%</span>
                  <span>95% (Strict)</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={runSimulation}
                disabled={isRunning}
                className="w-full py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-surface bg-accent hover:bg-accent-light transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/20 disabled:opacity-50"
              >
                <Play size={14} className={isRunning ? "animate-spin" : ""} />
                {isRunning ? "Running Pipeline Execution..." : "Run Forward Pass Simulation"}
              </button>
            </div>

            {/* Right Execution & Layer Inspector Column */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Output Verdict Window */}
              <div className="p-5 rounded-2xl border border-surface-border bg-surface-elevated/70 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-surface-border">
                  <span className="text-xs font-mono text-text-muted flex items-center gap-1.5">
                    <Activity size={14} className="text-accent" /> Inference Verdict Output
                  </span>
                  <span className="text-[11px] font-mono text-accent font-semibold">
                    Latency: ~18ms
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-text-secondary">Model Probability Score:</span>
                    <span className="text-lg font-mono font-bold text-accent">
                      {(confidenceScore * 100).toFixed(1)}%
                    </span>
                  </div>

                  {/* Meter Bar */}
                  <div className="w-full h-3 bg-surface rounded-full overflow-hidden border border-surface-border relative">
                    <div
                      className={`h-full transition-all duration-500 ${
                        isFlagged ? "bg-red-500" : "bg-accent"
                      }`}
                      style={{ width: `${confidenceScore * 100}%` }}
                    />
                    {/* Threshold Indicator Line */}
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-yellow-400 z-10"
                      style={{ left: `${threshold * 100}%` }}
                      title={`Threshold: ${(threshold * 100).toFixed(0)}%`}
                    />
                  </div>

                  {/* Verdict Card */}
                  <div
                    className={`p-3 rounded-xl border text-xs font-mono flex items-start gap-2.5 ${
                      isFlagged
                        ? "bg-red-500/10 border-red-500/30 text-red-400"
                        : "bg-accent/10 border-accent/30 text-accent"
                    }`}
                  >
                    {isFlagged ? (
                      <AlertTriangle size={16} className="mt-0.5 flex-shrink-0" />
                    ) : (
                      <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <span className="font-bold block uppercase tracking-wide">
                        {isFlagged ? "Flagged / Positive Classification" : "Verified / Normal Classification"}
                      </span>
                      <span className="text-[11px] text-text-secondary block mt-0.5">
                        {currentSample.note}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Layer Inspector */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-text-muted flex items-center gap-1.5">
                  <Layers size={13} className="text-accent" /> Pipeline Layer Execution Flow:
                </span>

                <div className="space-y-1.5">
                  {selectedModel.layers.map((layer, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-lg border text-xs font-mono transition-all flex items-center justify-between ${
                        activeLayerIndex === idx
                          ? "bg-accent text-surface font-bold border-accent shadow-md"
                          : "bg-surface/50 border-surface-border text-text-secondary"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-[10px] opacity-70">L{idx + 1}</span>
                        {layer}
                      </span>
                      {activeLayerIndex === idx && (
                        <span className="text-[10px] uppercase font-bold tracking-wider animate-pulse">
                          Processing
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
