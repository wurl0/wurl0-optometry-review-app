import json, glob
SC="/private/tmp/claude-501/-Users-wyrloalbert-Documents-Claude-Work/896ffecb-36ee-4d8a-bab9-010651f95a82/scratchpad"
D={}
for f in sorted(glob.glob(SC+"/attach_D_*.json")):
    part=json.load(open(f))
    for k in part:
        assert k not in D, ("dup", k)
    D.update(part)
print("authored:", len(D))
A=json.load(open("banks/D.json"))
ids={q['id'] for q in A}
missing=[i for i in ids if i not in D]
extra=[i for i in D if i not in ids]
print("bank:", len(ids), "missing:", len(missing), "extra:", len(extra))
if missing: print("MISSING", sorted(missing)[:20])
if extra: print("EXTRA", sorted(extra)[:20])
bad=[]
for q in A:
    e=D.get(q['id'])
    if not e: continue
    if len(e['ow'])!=len(q['o']): bad.append((q['id'],'len'))
    elif not e['ow'][q['a']].strip().lower().startswith('correct'): bad.append((q['id'],'slot'))
print("alignment problems:", len(bad), bad[:20])
if not missing and not extra and not bad:
    n=0
    for q in A:
        e=D[q['id']]; q['decode']=e['decode']; q['ow']=e['ow']; n+=1
    open("banks/D.json","w").write(json.dumps(A, indent=1, ensure_ascii=False)+"\n")
    print("APPLIED decode+ow to", n, "D questions")
