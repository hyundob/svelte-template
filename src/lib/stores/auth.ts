// src/lib/stores/auth.ts
import { writable } from 'svelte/store';

export const isLoggedIn = writable(false);

export async function login(username: string, password: string) {
    const res = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // refreshToken 쿠키 저장
        body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
        const data = await res.json();
        localStorage.setItem('accessToken', data.token);
        isLoggedIn.set(true);
        return true;
    }

    return false;
}

export async function logout() {
    localStorage.removeItem('accessToken');
    isLoggedIn.set(false);
}
