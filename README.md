# Sushant Portfolio

TanStack Start portfolio app built with Vite, React, Tailwind, and Cloudflare Workers.

## Local Development

Install dependencies:

```powershell
bun install
```

Run locally:

```powershell
bun run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Build Check

Before deploying, run:

```powershell
bun run build
```

The production output is generated in:

```text
dist/client
dist/server
```

## Deploy To Cloudflare Workers

This project is already configured for Cloudflare Workers through `wrangler.jsonc` and the Cloudflare Vite plugin.

Run a deploy dry run first:

```powershell
bun run deploy:dry-run
```

Deploy:

```powershell
bun run deploy
```

If Wrangler asks for authentication in a non-interactive terminal, create a Cloudflare API token with Workers deploy access and set it before deploying:

```powershell
$env:CLOUDFLARE_API_TOKEN="your_cloudflare_api_token"
bun run deploy
```

## Deploy From GitHub Using Cloudflare Dashboard

Use this if the project is already pushed to GitHub and you want Cloudflare to deploy automatically whenever you push.

1. Open Cloudflare dashboard.

2. Go to Workers & Pages.

3. Select Create application.

4. Choose Import a repository.

5. Connect GitHub and select your portfolio repository.

6. Configure the Worker:

```text
Project/Worker name: sushant-portfolio
Production branch: main
Root directory: /
Build command: npm ci && npm run build
Deploy command: npx wrangler deploy --config dist/server/wrangler.json
```

Do not commit `bun.lockb` for the Cloudflare build. This repo uses `package-lock.json` for deployment so Cloudflare installs with npm instead of trying `bun install --frozen-lockfile`.

If your GitHub branch is `master`, use `master` instead of `main`.

The Worker name must match the `name` field in `wrangler.jsonc`.

7. Save and deploy.

8. After the build finishes, Cloudflare will give you a `workers.dev` URL.

9. Every future GitHub push to the production branch will rebuild and redeploy the site.

## Publish On Your Own Domain

Use this when you want a real domain in the browser, like `yourdomain.in`.

1. Buy a domain from Cloudflare Registrar, Namecheap, GoDaddy, Hostinger, or any domain provider.

2. Add the domain to Cloudflare:

   - Open the Cloudflare dashboard.
   - Go to Websites / Domains.
   - Add your apex domain, for example `yourdomain.in`.
   - Choose the Free plan if you do not need paid features.

3. If the domain was bought outside Cloudflare, update nameservers at your domain provider:

   - Cloudflare will show two nameservers.
   - Open your registrar dashboard.
   - Replace the old nameservers with the Cloudflare nameservers.
   - Wait until Cloudflare shows the domain as Active. This can take a few minutes, but sometimes up to 24 hours.

4. Deploy the Worker once:

```powershell
bun run deploy
```

5. Connect the custom domain. You can do this in either the dashboard or config.

Dashboard method:

   - Go to Cloudflare dashboard.
   - Open Workers & Pages.
   - Select the `sushant-portfolio` Worker.
   - Go to Settings > Domains & Routes.
   - Select Add > Custom Domain.
   - Enter your domain, for example `yourdomain.in`.
   - Add it and wait for the certificate to become active.

Config method:

   - Open `wrangler.jsonc`.
   - Uncomment the `routes` line.
   - Replace `yourdomain.in` with your real domain.

Example:

```jsonc
"routes": [{ "pattern": "yourdomain.in", "custom_domain": true }],
```

Then run:

```powershell
bun run deploy
```

6. Optional: also connect `www`.

Add a second custom domain:

```jsonc
"routes": [
  { "pattern": "yourdomain.in", "custom_domain": true },
  { "pattern": "www.yourdomain.in", "custom_domain": true }
],
```

Then deploy again:

```powershell
bun run deploy
```

## Push To Existing `portfolio` GitHub Repo

If you already have a local folder/repo named `portfolio`, copy this project into that folder but do not copy these generated folders:

```text
node_modules
dist
.wrangler
```

Then from inside your `portfolio` folder:

```powershell
git status
git add .
git commit -m "Deploy portfolio"
git push origin main
```

If your branch is named `master`, use:

```powershell
git push origin master
```

## Important Files

- `src/routes/index.tsx` - main portfolio page
- `public/resume.pdf` - deployed resume file used by the Resume button
- `wrangler.jsonc` - Cloudflare Worker config
- `package.json` - dev, build, and deploy scripts
