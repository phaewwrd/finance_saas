"use client"
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/accounts/api/hooks/use-new-account";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { columns } from "./column";
import { DataTable } from "@/components/ui/data-table";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";




export default function AccountsPage() {
  const newAccount = useNewAccount();
  const accountQuery = useGetAccounts(); 
  const accounts = accountQuery.data || []


  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader>
          <CardTitle>Accounts Page</CardTitle>
          <Button onClick={() => newAccount.onOpen()}>
        <Plus className="size-4 mr-2"/>
        Add new
          </Button>
          <CardDescription>Manage your accounts</CardDescription>
        </CardHeader>
        <CardContent>
        <DataTable 
        filterKey="email"
        columns={columns} 
        data={accounts} 
        onDelete={()=>{}}
        disabled={false}
        /> 
        </CardContent>
      </Card>
    </div>
  );
};
