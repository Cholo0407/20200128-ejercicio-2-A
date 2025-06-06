import { useEffect, useState, useRef } from "react";
import { url } from "../../utils/apiUrls";
import { toast } from "react-hot-toast";

const useFetchCourses = () => {
  const [cursos, setCursos] = useState([]);
  const isMounted = useRef(true); // Mantiene una referencia para saber si el componente está montado

  const getCourses = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error al obtener los cursos");
      }
      const data = await response.json();
      if (isMounted.current) {  // Solo actualiza el estado si el componente sigue montado
        setCursos(data);
      }
    } catch (error) {
      console.error("Error al obtener los cursos:", error);
      toast.error("Error al obtener los cursos");
    }
  };

  const getCourseById = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`);
      if (!response.ok) {
        throw new Error("Error al obtener el curso");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener el curso:", error);
      toast.error("Error al obtener el curso");
      return null;
    }
  };

  useEffect(() => {
    isMounted.current = true;  // El componente se monta
    getCourses();

    // Cleanup function para marcar cuando el componente se desmonte
    return () => {
      isMounted.current = false;  // El componente se desmonta
    };
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  return {
    cursos,
    getCourses,
    getCourseById,
  };
};

export default useFetchCourses;
