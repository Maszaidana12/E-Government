// app/context/ProfileContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Tentukan tipe data untuk context
interface ProfileContextType {
  profileImage: string | null;
  setProfileImage: (url: string | null) => void;
  // Anda bisa menambahkan field lain seperti userName di sini
}

// Nilai default untuk context (gunakan undefined untuk menandakan belum di-load)
const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

// 1️⃣ Profile Provider Component
export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  
  // URL default jika tidak ada gambar (pastikan Anda punya gambar ini)
  const DEFAULT_IMAGE = "/default-profile.png"; 

  // Efek ini akan memuat foto profil awal saat komponen dimuat
  useEffect(() => {
    async function getProfileInitial() {
      try {
        const res = await fetch("/api/profile/update"); // Endpoint yang mengembalikan data user saat ini
        if (!res.ok) throw new Error('Failed to fetch profile');
        
        const data = await res.json();
        
        // Cek apakah ada nama file gambar di database (misal di field 'images')
        if (data.user?.images) {
             // Pastikan path ke folder upload Anda benar (misal: /uploads/namafile.jpg)
             const imageUrl = "/uploads/" + data.user.images; 
             setProfileImage(imageUrl);
        } else {
             setProfileImage(DEFAULT_IMAGE);
        }
      } catch (error) {
          console.error("Error loading initial profile image:", error);
          setProfileImage(DEFAULT_IMAGE); // Gunakan gambar default jika gagal
      }
    }

    getProfileInitial();
  }, []);

  return (
    <ProfileContext.Provider value={{ profileImage, setProfileImage }}>
      {children}
    </ProfileContext.Provider>
  );
}

// 2️⃣ Custom hook untuk menggunakan Profile Context
export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}