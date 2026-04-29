# 守口移住トラッカー

荒川区から守口市への引っ越し準備を、期限・カテゴリ・優先度で追うための小さなWebAppです。

## ローカルで確認

```powershell
node server.js
```

ブラウザで `http://localhost:4173` を開きます。

## Vercel Freeに載せる

このフォルダをGitHubにpushして、VercelでImportすれば静的サイトとして公開できます。

- Framework Preset: Other
- Build Command: 空欄
- Output Directory: 空欄

## データ保存

タスクはブラウザの `localStorage` に保存されます。同じURLをスマホで開けますが、PCとスマホのタスク自動同期はまだありません。
端末間同期が必要になったら、次の段階でSupabaseなどの無料枠を追加します。
