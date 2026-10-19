import React, { useState } from 'react';
import "../../Styles/Sginup.css";

function Sginup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!agree) {
            alert('Please accept the Terms of Service.');
            return;
        }

        console.log({ name, email, password });
    };

    return (
        <div className="signup-page">
            <nav className="signup-navbar">
                <a href="/" className="signup-logo">
                    TRADE<span>ORA</span>
                    <div className="logo-dot"></div>
                </a>
                <p>
                    Already have an account?
                    <a href="/login"> Log in</a>
                </p>
            </nav>

            <main className="signup-main">
                <section className="signup-card">
                    <div className="signup-heading">
                        <span className="signup-tag">
                            YOUR NEXT CHAPTER
                        </span>

                        <h1>Create your account<span>.</span></h1>

                        <p>
                            Start your investing journey with Tradeora.
                            Simple, smart, and built around you.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="signup-field">
                            <label htmlFor="name">Full name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="signup-field">
                            <label htmlFor="email">Email address</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="signup-field">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Create a strong password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                minLength={8}
                                required
                            />
                            <small>Use at least 8 characters.</small>
                        </div>

                        <label className="signup-terms">
                            <input
                                type="checkbox"
                                checked={agree}
                                onChange={(e) => setAgree(e.target.checked)}
                            />
                            <span>
                                I agree to the <a href="/terms">Terms of Service</a>
                                {' '}and <a href="/privacy">Privacy Policy</a>.
                            </span>
                        </label>

                        <button type="submit" className="signup-submit">
                            Create account <span>→</span>
                        </button>
                    </form>

                    <div className="signup-divider">
                        <span></span>
                        <p>OR CONTINUE WITH</p>
                        <span></span>
                    </div>

                    <button
                        type="button"
                        className="signup-google"
                        onClick={() => alert('Google signup is not connected yet.')}
                    >
                        <span className="google-g">G</span>
                        Continue with Google
                    </button>

                    <p className="signup-footer">
                        Protected by modern security.
                        <span> Your data stays yours.</span>
                    </p>
                </section>

                <aside className="signup-visual">
                    <div className="visual-topline">
                        <span className="visual-status"></span>
                        YOUR FINANCIAL JOURNEY
                    </div>

                    <div className="visual-copy">
                        <p>THINK LONG TERM.</p>
                        <h2>
                            Build your
                            <br />
                            future<span> today.</span>
                        </h2>
                        <p className="visual-description">
                            A smarter space to learn, explore, and take
                            control of your financial goals.
                        </p>
                    </div>

                    <div className="market-card">
                        <div>
                            <span>YOUR NEXT MOVE</span>
                            <h3>Starts here.</h3>
                        </div>

                        <div className="market-chart">
                            <svg viewBox="0 0 300 100" role="img" aria-label="Decorative rising line chart">
                                <defs>
                                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#62e6a5" stopOpacity=".3" />
                                        <stop offset="100%" stopColor="#62e6a5" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M0 85 L35 68 L62 76 L96 43 L126 54 L162 30 L190 43 L225 16 L255 27 L300 4 L300 100 L0 100 Z"
                                    fill="url(#chartFill)"
                                />
                                <path
                                    d="M0 85 L35 68 L62 76 L96 43 L126 54 L162 30 L190 43 L225 16 L255 27 L300 4"
                                    fill="none"
                                    stroke="#62e6a5"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="visual-bottom">
                        <span>LEARN.</span>
                        <span>PLAN.</span>
                        <span>GROW.</span>
                    </div>
                </aside>
            </main>
        </div>
     );
}

export default Sginup;