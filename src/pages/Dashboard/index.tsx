import { useAuth } from "../../hooks/useAuth";
import { Button } from "../../components/ui";
import { useApiToast } from "../../hooks/useApiToast";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const { apiSuccess, apiError } = useApiToast();

  const handleLogout = async () => {
    try {
      await logout();
      apiSuccess("Logout realizado com sucesso!");
    } catch (error) {
      console.error("Erro no logout:", error);
      apiError("Erro no logout", "Ocorreu um erro ao fazer logout");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Bem-vindo, {user?.fullName}!</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                Logado como: <strong>{user?.userName}</strong>
              </span>
              <Button
                variant="secondary"
                onClick={handleLogout}
                className="!w-auto px-4 py-2"
              >
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cards de exemplo */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                      <span className="text-white font-bold">U</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Total de Usuários
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        1,234
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                      <span className="text-white font-bold">$</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Receita Total
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        R$ 45.678,90
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                      <span className="text-white font-bold">!</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Tarefas Pendentes
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">23</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seção de informações do usuário */}
          <div className="mt-8">
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Suas Informações
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      ID do Usuário
                    </label>
                    <p className="mt-1 text-sm text-gray-900">{user?.id}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Nome de Usuário
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {user?.userName}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Nome Completo
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {user?.fullName}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {user?.email || "Não informado"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
