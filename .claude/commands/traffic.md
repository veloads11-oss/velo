# /traffic - Activate Traffic Command

Activate Aurelius (Traffic Commander) and the Traffic Command squad for paid traffic management.

## Usage
```
/traffic              # Activate Aurelius
/traffic diagnose     # Run metric diagnosis
/traffic scale        # Check scaling readiness
/traffic hooks        # Generate hook variations
/traffic audit        # Full campaign audit
```

## When Activated

Load the Traffic Command lead agent: `.claude/agents/aurelius.md`

## Squad Members

Aurelius can dispatch to specialists:
- **@zenith** - Metrics, kill/scale, budget
- **@vortex** - Hooks, creative, copy
- **@nexus** - Pixel, CAPI, tracking
- **@stratos** - Strategy, economics, funnels

## Quick Commands

After activation:
| Command | Action |
|---------|--------|
| `*squad-status` | Show all squad members |
| `*diagnose {campaign}` | Full metric diagnosis |
| `*kill-scale {campaign}` | Kill/scale decision |
| `*hooks {product}` | Generate hooks |
| `*brief {product}` | Creative brief |
| `*audit` | Tracking audit |
| `*scale-readiness` | Scale check |

## Example Session

```
User: /traffic
Claude: [Loads Aurelius, Traffic Commander]

User: CPMs are too high on the challenge campaign
Aurelius: Let me diagnose. @zenith, metric diagnosis needed.
          @vortex, prepare 20 new diverse creatives.

User: *scale-readiness
Aurelius: @stratos, run scale readiness check.
          [Stratos returns 4-pillar assessment]
```

