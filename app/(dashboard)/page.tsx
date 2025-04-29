'use client'

import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";

export default function Home() {
   const accontQuery = useGetAccounts()
  
  return (
    <div>
    Home Page
    </div>
  );
}
