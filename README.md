# Husamettin Arabacı

## Distributed Systems Engineer (Rust) --- IoT, Streaming & Deterministic Processing

I build reliability-critical IoT data platforms where correctness must
hold under retries, crashes, and network disorder.

My work spans from edge communication systems and embedded constraints
to high-throughput cloud streaming pipelines.

I design systems that remain correct when:

-   events arrive multiple times
-   ordering is broken
-   processes crash mid-execution
-   network partitions occur
-   recovery must be deterministic

------------------------------------------------------------------------

## Focus Areas

-   IoT telemetry ingestion & edge-to-cloud pipelines
-   Streaming architectures (Kafka / event-driven systems)
-   Idempotent processing & duplicate side-effect prevention
-   Out-of-order event correction
-   Transactional task orchestration
-   Split-brain prevention & coordination safety
-   Backpressure, batching & crash-safe recovery

------------------------------------------------------------------------

## What I Care About

I optimize for correctness before convenience.

Systems I design:

-   avoid silent data corruption
-   remain replayable after failure
-   bound inconsistency under load
-   separate side-effects from state transitions
-   treat distributed failure as a normal condition, not an edge case

------------------------------------------------------------------------

## Selected Engineering Themes

-   Sharded streaming pipelines under continuous multi-Gbps telemetry
-   Temporal deduplication windows for high-frequency RF streams
-   Idempotent processing in distributed IoT transaction networks
-   Leader arbitration to eliminate split-brain failures
-   Ledger-based state modeling for deterministic reconciliation
-   Embedded protocol reverse engineering & distributed OTA propagation

------------------------------------------------------------------------

## Current Work

### hexaFn --- Experimental Event-Driven Runtime (Rust)

Pipeline Model:

Feed → Filter → Transform → Execute → Forward → Feedback

Designed to remain correct under:

-   duplicate events
-   non-guaranteed ordering
-   crash & restart cycles

------------------------------------------------------------------------

If you work on IoT platforms, telemetry systems, or reliability-critical
infrastructure --- let's connect.
