import { UserOutlined } from "@ant-design/icons";
import Header from "@/components/Header/Header";
import { createClient } from "@/supabase/clients/server";
import AccountInformationCard from "@/account/components/AccountInformationCard";
import LogoutSection from "@/account/components/LogoutSection";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const user = session?.user;

  if (!user) redirect("/login");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header>
        <div className="flex items-center gap-2 text-sm text-gray-600 max-w-[1440px] mx-auto px-4 md:px-4 pr-16 md:pr-4">
          <UserOutlined className="mr-1" />
          <span className="text-gray-900 font-medium">Mi cuenta</span>
        </div>
      </Header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <section className="p-6 border-b border-gray-100">
            <AccountInformationCard user={user} />
          </section>

          <section className="p-6">
            <LogoutSection />
          </section>
        </div>
      </main>
    </div>
  );
}
