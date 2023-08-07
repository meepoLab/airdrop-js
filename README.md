# how to use

1. generate Mnemonic
```bash
curl http://localhost:3004/generateMnemonic 

response
{"code":0,"data":"bubble wreck gaze salon frog title annual piano yellow salon tattoo chat post egg face tide speed soap senior divorce ostrich stadium moral morning"}
```

2. derive Account

>相同助记词，相同序号派生出来的 account 一致
```bash
curl 'http://127.0.0.1:3004/deriveAccount' \
-H "Content-Type: application/json" \
-d '{"mnemonic": "best card apart solution sail answer river fork fall view crane slow pact pride sand cheap rebel depth also slow staff grow base protect", "accountNumber": 20 }'

response
{
  code: 0,
  account: [
    {
      key: private key,
      address: public key
    },
    ...
  ]
}
```