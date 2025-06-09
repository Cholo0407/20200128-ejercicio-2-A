import { useNavigate } from "react-router-dom";
import Titulo from "../components/Tittle";
import Button from "../components/Button";

const Welcome = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/home");
  };



  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        <div className="text-center">
          
          <div className="mb-12">
            
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>

            <Titulo 
              titulo="Bienvenido a Course Manager" 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" 
            />
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              La plataforma completa para gestionar y organizar todos tus cursos de manera eficiente y profesional
            </p>

          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              ¿Listo para comenzar?
            </h3>
            <p className="text-gray-600 mb-8">
              Accede al dashboard y comienza a gestionar tus cursos en linea
            </p>
            
            <div className="flex justify-center">
              <Button
                onClick={handleGetStarted}
                text="Comenzar Ahora"
                size="large"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
              }
            />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Welcome;