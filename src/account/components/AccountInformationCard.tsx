import { UserOutlined, GithubOutlined, MailOutlined } from "@ant-design/icons";
import { User } from "@supabase/supabase-js";

interface Props {
  user: User;
}

export default function AccountInformationCard({ user }: Props) {
  const { email, app_metadata, user_metadata, last_sign_in_at } = user;
  const provider = app_metadata.provider;
  
  const lastSignIn = last_sign_in_at 
    ? new Date(last_sign_in_at).toLocaleString('es-ES', {
        dateStyle: 'medium',
        timeStyle: 'short'
      })
    : 'No disponible';

  const getProviderIcon = () => {
    switch (provider) {
      case 'github':
        return <GithubOutlined className="text-base" />;
      default:
        return <MailOutlined className="text-base" />;
    }
  };

  return (
    <>
      <h2 className="text-lg font-medium flex items-center gap-2">
        <UserOutlined />
        Información Personal
      </h2>
      
      <div className="mt-6 space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-700">Email</h3>
          <p className="mt-1 text-sm text-gray-900">{email}</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700">Método de inicio de sesión</h3>
          <div className="mt-1 flex items-center gap-2 text-sm text-gray-900">
            {getProviderIcon()}
            <span className="capitalize">{provider}</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700">Último inicio de sesión</h3>
          <p className="mt-1 text-sm text-gray-900">{lastSignIn}</p>
        </div>

        {user_metadata.avatar_url && (
          <div>
            <h3 className="text-sm font-medium text-gray-700">Avatar</h3>
            <img 
              src={user_metadata.avatar_url} 
              alt="Avatar" 
              className="mt-1 w-16 h-16 rounded-full"
            />
          </div>
        )}
      </div>
    </>
  );
}
