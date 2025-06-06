import { useNavigate, useParams } from "react-router-dom";  
import Titulo from "../components/Tittle";
import InputText from "../components/InputText";
import Button from "../components/Button";
import useDataCourse from '../hooks/courses/useDataCourse';  
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const Courses = () => {
    const navigate = useNavigate(); 
    const { id } = useParams();  
    const methods = useForm();    // Hook de React Hook Form
  
    const { register, handleSubmit, errors, loadCourse, saveCourseForm } = useDataCourse(methods);
  
    useEffect(() => {
      if (id) {
        loadCourse();  // Cargar el curso solo si se está editando
      }
    }, [id]);
  
    const handleBackToHome = () => {
      navigate("/home");  // Navegar al home sin recargar la página
    };
  
    // Función para manejar el submit del formulario
    const onSubmit = (data) => {
      saveCourseForm(data);  // Llama a la función para guardar el curso
    };
  
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={handleBackToHome}  
          className="text-2xl font-bold text-gray-900 mb-4 bg-green-100 p-2 rounded w-auto text-center hover:bg-green-200 transition-colors"
        > 
          Volver al Dashboard
        </button>
        
        <form
          onSubmit={handleSubmit}  // Pasa la función onSubmit aquí
          className="border-b border-gray-900/10 pb-12 bg-white shadow-md rounded-lg flex flex-col p-4"
        >
          <Titulo titulo={id ? "Actualizar Curso" : "Crear Curso"} />  {/* Título dinámico basado en si estamos creando o editando */}
          
          <p className="mt-1 text-sm text-gray-600">
            Rellena los campos a continuación para agregar o actualizar un curso.
          </p>
  
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Nombre del curso */}
            <InputText
              type="text"
              name="curso"
              label="Nombre del Curso"
              placeholder="Ingresa el nombre del curso"
              register={register}
              error={errors.curso}
            />
            
            {/* Temática */}
            <InputText
              type="text"
              name="tematica"
              label="Temática"
              placeholder="Ingresa la temática del curso"
              register={register}
              error={errors.tematica}
            />
            
            {/* Instructor */}
            <InputText
              type="text"
              name="instructor"
              label="Instructor"
              placeholder="Ingresa el nombre del instructor"
              register={register}
              error={errors.instructor}
            />
  
            {/* Descripción */}
            <InputText
              type="text"
              name="descripcion"
              label="Descripción"
              placeholder="Describe el contenido del curso"
              register={register}
              error={errors.descripcion}
            />
          </div>
  
          <Button type="submit" text={id ? "Actualizar Curso" : "Crear Curso"} />
        </form>
      </div>
    );
  };
  
  export default Courses;
  
