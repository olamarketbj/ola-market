'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function RegisterPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<'client' | 'vendeur'>('client')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName, phone, role },
      },
    })

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
      <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', width: '100%', maxWidth: '450px' }}>
        <h1 style={{ fontSize: '24px', color: '#1B2A4A', marginBottom: '8px', textAlign: 'center' }}>Créer un compte</h1>
        <p style={{ color: '#666', textAlign: 'center', marginBottom: '25px', fontSize: '14px' }}>
          Rejoignez O'LA Market
        </p>

        {error && (
          <div style={{ background: '#fee', color: '#c00', padding: '10px', borderRadius: '6px', marginBottom: '15px', fontSize: '13px' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleRegister}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '13px', color: '#333', marginBottom: '5px' }}>Nom complet</label>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', boxSizing: 'border-box' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '13px', color: '#333', marginBottom: '5px' }}>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', boxSizing: 'border-box' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '13px', color: '#333', marginBottom: '5px' }}>Téléphone</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+229..." style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', boxSizing: 'border-box' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '13px', color: '#333', marginBottom: '5px' }}>Mot de passe</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', boxSizing: 'border-box' }} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', color: '#333', marginBottom: '5px' }}>Je suis</label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="button" onClick={() => setRole('client')} style={{ flex: 1, padding: '10px', background: role === 'client' ? '#1B2A4A' : 'white', color: role === 'client' ? 'white' : '#1B2A4A', border: '1px solid #1B2A4A', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                Client
              </button>
              <button type="button" onClick={() => setRole('vendeur')} style={{ flex: 1, padding: '10px', background: role === 'vendeur' ? '#1B2A4A' : 'white', color: role === 'vendeur' ? 'white' : '#1B2A4A', border: '1px solid #1B2A4A', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                Vendeur
              </button>
            </div>
          </div>

          <button type="submit" disabled={loading} style={{ width: '100%', padding: '12px', background: '#F5A623', color: '#1B2A4A', border: 'none', borderRadius: '6px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', opacity: loading ? 0.6 : 1 }}>
            {loading ? 'Création...' : "S'inscrire"}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#666' }}>
          Déjà un compte ?{' '}
          <Link href="/login" style={{ color: '#F5A623', fontWeight: 'bold', textDecoration: 'none' }}>Se connecter</Link>
        </p>
      </div>
    </main>
  )
}
