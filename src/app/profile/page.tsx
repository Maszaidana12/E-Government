// src/app/profile/page.tsx (Komponen Profile)
"use client"; // Halaman harus Client Component untuk menggunakan Provider

import { ProfileProvider } from '@/app/context/ProfileContext'; 
import ProfileForms from './profile/profil'; // Komponen form Anda

export default function ProfilePage() {
    return (
        <ProfileProvider>
            <ProfileForms />
        </ProfileProvider>
    );
}