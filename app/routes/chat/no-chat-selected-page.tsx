import { MessageCircle, Users, ArrowRight } from "lucide-react";

const NoChatSelectedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      {/* Contenedor principal */}
      <div className="max-w-md w-full text-center space-y-8">
        {/* Icono principal con animación */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300">
            <MessageCircle size={40} className="text-white" />
          </div>

          {/* Elementos decorativos animados */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1 -left-3 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
        </div>

        {/* Título principal */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-slate-800 leading-tight">
            No hay chat seleccionado
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Selecciona una conversación del panel lateral para comenzar a
            chatear
          </p>
        </div>

        {/* Tarjetas de características */}
        <div className="grid gap-4 mt-8">
          <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users size={20} className="text-blue-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-slate-800">Conversaciones</h3>
              <p className="text-sm text-slate-600">Gestiona múltiples chats</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <ArrowRight size={20} className="text-purple-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-slate-800">
                Navegación rápida
              </h3>
              <p className="text-sm text-slate-600">
                Cambia entre chats fácilmente
              </p>
            </div>
          </div>
        </div>

        {/* Indicador de estado */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-200 rounded-full text-sm text-slate-700">
          <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
          <span>Esperando selección...</span>
        </div>

        {/* Mensaje motivacional para ti como desarrollador */}
        <div className="mt-12 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
          <p className="text-sm text-slate-700 italic">
            💡 <strong>Tip de desarrollo:</strong> Esta pantalla mejora la UX al
            proporcionar contexto claro al usuario sobre el estado actual de la
            aplicación.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoChatSelectedPage;
