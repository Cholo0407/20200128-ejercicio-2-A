import { useNavigate, useParams } from "react-router-dom";  
import toast from "react-hot-toast";
import Titulo from "../components/Tittle";
import InputText from "../components/InputText";
import Button from "../components/Button";
import useDataCourse from '../hooks/courses/useDataCourse';  
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const Courses = () => {
    const navigate = useNavigate(); 
    const { id } = useParams();  
    const methods = useForm();
  
    const { register, handleSubmit, errors, loadCourse, saveCourseForm } = useDataCourse(methods);
  
    useEffect(() => {
      if (id) {
        loadCourse();
      }
    }, [id]);
  
    const handleBackToHome = () => {
      navigate("/home");
    };
  
    const onSubmit = async (data) => {
      try {
        await saveCourseForm(data);
        // Toast de éxito
        toast(
          <div className="flex items-center gap-2">
            <span className="text-green-500">✅</span>
            <span className="text-sm text-gray-800">
              {id ? 'Curso actualizado correctamente' : 'Curso creado correctamente'}
            </span>
          </div>,
          { duration: 3000 }
        );
        // Redirigir después de un momento
        setTimeout(() => navigate("/home"), 1500);
      } catch (error) {
        // Toast de error
        toast(
          <div className="flex items-center gap-2">
            <span className="text-red-500">❌</span>
            <span className="text-sm text-gray-800">Error al guardar el curso</span>
          </div>,
          { duration: 3000 }
        );
      }
    };
  
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-6 py-12">
          
          <Button
            onClick={handleBackToHome}
            text="Volver al Dashboard"
            variant="secondary"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            }
          />
          <br /><br />
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            
            <div className="px-8 py-6 border-b border-gray-100">
              <Titulo titulo={id ? "Editar Curso" : "Nuevo Curso"} className="text-2xl font-semibold text-gray-900" />
              <p className="mt-2 text-gray-600">
                {id ? "Actualiza la información del curso" : "Completa los datos para crear un nuevo curso"}
              </p>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-6">
              
              <div className="space-y-6">
                
                {/* Nombre del curso */}
                <div>
                  <InputText
                    type="text"
                    name="curso"
                    label="Nombre del Curso"
                    placeholder="Ingresa el nombre del curso"
                    register={register}
                    error={errors.curso}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Temática */}
                  <div>
                    <InputText
                      type="text"
                      name="tematica"
                      label="Temática"
                      placeholder="Ej. Programación, Diseño"
                      register={register}
                      error={errors.tematica}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  {/* Instructor */}
                  <div>
                    <InputText
                      type="text"
                      name="instructor"
                      label="Instructor"
                      placeholder="Nombre del instructor"
                      register={register}
                      error={errors.instructor}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                </div>

                {/* Descripción */}
                <div>
                  <InputText
                    type="text"
                    name="descripcion"
                    label="Descripción"
                    placeholder="Describe el contenido del curso"
                    register={register}
                    error={errors.descripcion}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    text={id ? "Actualizar Curso" : "Crear Curso"}
                    className="w-full"
                  />
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Courses;