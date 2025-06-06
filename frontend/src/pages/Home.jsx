import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import Tittle from "../components/Tittle";
import Button from "../components/Button";
import ButtonDelete from "../components/Button";
import useFetchCourses from "../hooks/courses/useFetchCourses";
import useCourseActions from "../hooks/courses/useCourseActions";

const Home = () => {
  const navigate = useNavigate(); // Usamos el hook useNavigate para la navegación
  const { cursos, getCourses } = useFetchCourses();
  const { deleteCourse, handleUpdateCourse } = useCourseActions(getCourses);

  // Función para manejar la redirección a la página de creación de curso
  const handleAddCourse = () => {
    navigate("/cursos/crear");
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 bg-white rounded-lg shadow-xl">
        <div className="flex justify-between items-center mb-8">
          {/* Usamos la función handleAddCourse para redirigir */}
          <button
            onClick={handleAddCourse}
            className="text-2xl font-semibold text-white bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            Agregar Curso
          </button>
          <Tittle titulo="Información de los Cursos" />
        </div>

        <p className="text-gray-700 text-center mb-6 text-lg">
          Lista de cursos disponibles para todos los interesados en aprender.
        </p>

        <div className="overflow-x-auto rounded-lg shadow-md bg-white">
          <table className="min-w-full text-gray-700">
            <thead className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-sm">
              <tr>
                <th className="px-6 py-3 text-left">Curso</th>
                <th className="px-6 py-3 text-left">Temática</th>
                <th className="px-6 py-3 text-left">Instructor</th>
                <th className="px-6 py-3 text-left">Descripción</th>
                <th className="px-6 py-3 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cursos?.map((curso) => (
                <tr key={curso.id} className="border-b hover:bg-gray-50 transition-all duration-200">
                  <td className="px-6 py-4">{curso.curso}</td>
                  <td className="px-6 py-4">{curso.tematica}</td>
                  <td className="px-6 py-4">{curso.instructor}</td>
                  <td className="px-6 py-4">{curso.descripcion}</td>
                  <td className="px-6 py-4 flex space-x-4">
                    <Button
                      text="Editar"
                      onClick={() => handleUpdateCourse(curso.id)}
                      className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg shadow-md transition-all duration-200"
                    />
                    <ButtonDelete
                      text="Eliminar"
                      onClick={() => deleteCourse(curso.id)}
                      className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-lg shadow-md transition-all duration-200"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
