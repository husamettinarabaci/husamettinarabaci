# Husamettin Arabacı

🛠 Distributed Systems & Reliability Engineer (Rust)  
Designing systems that remain correct under retries, crashes and network disorder.

---

## What I Do

I work on reliability-critical backend infrastructure and real-time data processing systems.

My focus is not features — it is failure behavior.

I design systems that continue to operate correctly when:

- events arrive multiple times
- ordering is broken
- processes crash mid-execution
- network partitions occur
- recovery must be deterministic

Typical domains I worked in:

- real-time telemetry ingestion
- event-driven processing pipelines
- distributed coordination systems
- high-throughput data streams
- embedded communication networks

---

## Engineering Focus

- Idempotent processing
- Out-of-order event correction
- Replayable state recovery
- Split-brain prevention
- Deterministic pipelines
- Backpressure & batching strategies

---

## Featured Project — hexaFn

Experimental event-driven processing runtime written in Rust.

Pipeline model:

Feed → Filter → Transform → Execute → Forward → Feedback

The goal is to explore deterministic data processing where systems remain correct even when:

- events are duplicated
- ordering is not guaranteed
- workers restart at any moment

Repository:  
https://github.com/hTuneSys/hexaFn

---

## Tech

Rust, networking systems, embedded communication, real-time processing

---

## Collaboration

Interested in backend infrastructure and reliability problems,
especially systems operating under continuous load.
