import { url } from "../../utils/apiUrls";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useCourseActions = (getCourses) => {
  const navigate = useNavigate();

  const deleteCourse = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error al eliminar el curso");
      }
      toast.success("Curso eliminado con éxito");
      getCourses();  
    } catch (error) {
      console.error("Error al eliminar el curso:", error);
      toast.error("Error al eliminar el curso");
    }
  };

  const handleUpdateCourse = (id) => {
    navigate(`/cursos/${id}`); 
  };

  return {
    deleteCourse,
    handleUpdateCourse,
  };
};

export default useCourseActions;
