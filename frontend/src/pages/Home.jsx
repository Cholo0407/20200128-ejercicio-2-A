import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Tittle from "../components/Tittle";
import Button from "../components/Button";
import useFetchCourses from "../hooks/courses/useFetchCourses";
import useCourseActions from "../hooks/courses/useCourseActions";

const Home = () => {
  const navigate = useNavigate();
  const { cursos, getCourses } = useFetchCourses();
  const { deleteCourse, handleUpdateCourse } = useCourseActions(getCourses);

  const handleAddCourse = () => {
    navigate("/cursos/crear");
  };

  const handleDeleteCourse = (courseId, courseName) => {
    toast(
      (t) => (
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            <span className="text-red-500 text-lg">⚠️</span>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-800">
              ¿Eliminar "{courseName}"?
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                deleteCourse(courseId);
                toast.dismiss(t.id);
                toast.success('✅ Curso eliminado');
              }}
              className="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
            >
              Sí
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded hover:bg-gray-300"
            >
              No
            </button>
          </div>
        </div>
      ),
      { duration: Infinity }
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        <div className="mb-8 flex justify-between items-center">
          <div>
            <Tittle titulo="Gestión de Cursos" className="text-3xl font-semibold text-gray-900" />
            <p className="mt-2 text-gray-600">
              Administra y organiza todos tus cursos disponibles
            </p>
          </div>
          <Button
            onClick={handleAddCourse}
            text="Agregar Curso"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              }
          />
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Curso
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Temática
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Instructor
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Descripción
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cursos?.map((curso) => (
                  <tr key={curso.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{curso.curso}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{curso.tematica}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{curso.instructor}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600 max-w-xs truncate">{curso.descripcion}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleUpdateCourse(curso.id)}
                          className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-md hover:bg-blue-200 transition-colors"
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          Editar
                        </button>
                        <button
                          onClick={() => handleDeleteCourse(curso.id, curso.curso)}
                          className="inline-flex items-center px-3 py-1.5 bg-red-100 text-red-700 text-sm font-medium rounded-md hover:bg-red-200 transition-colors"
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;