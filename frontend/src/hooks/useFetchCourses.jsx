import { useEffect, useState } from "react";
import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";

const useFetchCourses = () => {
  const [cursos, setCursos] = useState([]);

  const getCourses = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error al obtener los cursos");
      }
      const data = await response.json();
      setCursos(data);
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
    getCourses();
  }, []);

  return {
    cursos,
    getCourses,
    getCourseById,
  };
};

export default useFetchCourses;
