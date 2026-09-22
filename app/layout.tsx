cat > app/layout.tsx << 'EOF'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "O'LA Market — Achetez et vendez en ligne",
  description: "Marketplace O'LA — Achetez et vendez en ligne au Bénin.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
EOF