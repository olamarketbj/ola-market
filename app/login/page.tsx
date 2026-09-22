'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/account')
      router.refresh()
    }
  }

  return (
    <main style={{ fontFamily: 'sans-serif', minHeight: '100vh', background: '#f9f9f9', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ fontSize: '24px', color: '#1B2A4A', marginBottom: '8px', textAlign: 'center' }}>Connexion</h1>
        <p style={{ color: '#666', textAlign: 'center', marginBottom: '25px', fontSize: '14px' }}>
          Accédez à votre compte O'LA Market
        </p>

        {error && (
          <div style={{ background: '#fee', color: '#c00', padding: '10px', borderRadius: '6px', marginBottom: '15px', fontSize: '13px' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '13px', color: '#333', marginBottom: '5px' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', color: '#333', marginBottom: '5px' }}>Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ width: '100%', padding: '12px', background: '#1B2A4A', color: 'white', border: 'none', borderRadius: '6px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', opacity: loading ? 0.6 : 1 }}
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#666' }}>
          Pas encore de compte ?{' '}
          <Link href="/register" style={{ color: '#F5A623', fontWeight: 'bold', textDecoration: 'none' }}>
            S'inscrire
          </Link>
        </p>

        <p style={{ textAlign: 'center', marginTop: '15px' }}>
          <Link href="/" style={{ color: '#999', fontSize: '13px', textDecoration: 'none' }}>← Retour à l'accueil</Link>
        </p>
      </div>
    </main>
  )
}
