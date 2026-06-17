# NIP: Meditation Goal Tracking with Accountability Deposits

This document defines the custom Nostr event kinds used by the MindfulSats application.

## Kind 39651: Goal Definition (Addressable)

An **addressable** event (replaceable by `pubkey` + `kind` + `d` tag) that defines a personal goal with an optional accountability deposit.

### Tags

| Tag | Required | Description |
|-----|----------|-------------|
| `d` | yes | Unique identifier for this goal (slug or UUID) |
| `alt` | yes | Human-readable description: "Meditation goal with accountability deposit" |
| `title` | yes | Short title of the goal (e.g., "Meditate 10 minutes daily") |
| `t` | yes | Category for relay filtering (e.g., "meditation", "mental-health") |
| `days` | no | Comma-separated day indices (0=Sun..6=Sat). Omitted = all 7 days. E.g., "1,2,3,4,5" for weekdays. |
| `frequency` | yes | One of: "daily" (all 7 days), "weekly" (N sessions per week), "custom" (specific days selected) |
| `target` | yes | Numeric target value |
| `unit` | yes | Unit of measure (e.g., "minutes", "sessions", "steps") |
| `duration_days` | yes | Number of days the goal runs |
| `pledge_msats` | no | Amount pledged in millisatoshis (e.g., "10000000" for 10k sats) |
| `start_date` | yes | Unix timestamp when the goal starts |
| `status` | yes | One of: "active", "completed", "failed", "cancelled" |
| `completed_at` | no | Unix timestamp when the goal was completed (only when status is "completed") |
| `description` | no | Longer description or motivation |

### Content

Empty string.

### Example

```json
{
  "kind": 39651,
  "content": "",
  "tags": [
    ["d", "goal-abc123"],
    ["alt", "Meditation goal with accountability deposit"],
    ["title", "Meditate 10 minutes daily"],
    ["t", "meditation"],
    ["t", "mental-health"],
    ["days", "1,2,3,4,5"],
    ["frequency", "custom"],
    ["target", "10"],
    ["unit", "minutes"],
    ["duration_days", "7"],
    ["pledge_msats", "10000000"],
    ["start_date", "1718236800"],
    ["status", "active"],
    ["description", "Building a daily meditation habit to reduce stress"]
  ]
}
```

## Kind 9327: Goal Check-in (Regular)

A **regular** event that records a daily check-in against a goal.

### Tags

| Tag | Required | Description |
|-----|----------|-------------|
| `a` | yes | Addressable reference to the goal event (`39651:<pubkey>:<d-tag>`) |
| `date` | yes | Date of the check-in in YYYY-MM-DD format |
| `duration` | no | Actual duration achieved (number + unit, e.g., "10 minutes") |
| `t` | yes | Same category tag(s) as the parent goal for relay filtering |

### Content

Optional reflection or note about the session.

### Example

```json
{
  "kind": 9327,
  "content": "Felt really calm today. Focused on breathing.",
  "tags": [
    ["a", "39651:abc123...:goal-abc123"],
    ["date", "2025-06-17"],
    ["duration", "10 minutes"],
    ["t", "meditation"],
    ["t", "mental-health"]
  ]
}
```
