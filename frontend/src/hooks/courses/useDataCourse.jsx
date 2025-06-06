import { url } from "../../utils/apiUrls"; 
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useFetchCourses from "./useFetchCourses"; 

const useDataCourse = (methods) => {
  const { getCourses } = useFetchCourses();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const navigate = useNavigate();

  // Guardar un nuevo curso
  const saveCourseForm = async (dataForm) => {
    try {
      const response = await fetch(url, {  // Usa la URL importada aquí
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });

      if (!response.ok) {
        toast.error("Error al agregar el curso");
        throw new Error("Error al agregar el curso");
      }

      toast.success("Curso guardado con éxito");
      navigate("/home");
    } catch (error) {
      console.error("Error al guardar el curso:", error);
    } finally {
      reset();
      getCourses();
    }
  };

  // Editar un curso
  const editCourse = async (dataForm) => {
    try {
      const response = await fetch(`${url}/${id}`, {  // Usa la URL importada aquí
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });

      if (!response.ok) {
        toast.error("Error al actualizar el curso");
        throw new Error("Error al actualizar el curso");
      }

      toast.success("Curso actualizado con éxito");
      navigate("/home");
    } catch (error) {
      console.error("Error al actualizar el curso:", error);
      toast.error("Error al actualizar el curso");
    } finally {
      reset();
      getCourses();
    }
  };

  // Función para manejar el formulario de creación o edición
  const handleCourseAction = (dataForm) => {
    if (id) {
      editCourse(dataForm);
    } else {
      saveCourseForm(dataForm);
    }
  };

  const loadCourse = async () => {
    if (id) {
      const course = await getCourses(id);
      if (course) {
        reset({
          curso: course?.curso,
          tematica: course?.tematica,
          instructor: course?.instructor,
          descripcion: course?.descripcion,
        });
      }
    }
  };

  useEffect(() => {
    loadCourse();
  }, [id]);

  return {
    register,
    handleSubmit: handleSubmit(handleCourseAction),
    errors,
    getCourses,
    loadCourse,
  };
};

export default useDataCourse;
