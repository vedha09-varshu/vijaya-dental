import { useState, useEffect } from "react";
import { Pencil, Trash } from "lucide-react";

export const Blog = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  // 🔥 Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("blogs");
    if (saved) setBlogs(JSON.parse(saved));
  }, []);

  // 🔥 Save to localStorage
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const handleSubmit = () => {
    if (!title || !desc) return;

    if (editId) {
      // ✏️ EDIT
      setBlogs(
        blogs.map((b) =>
          b.id === editId ? { ...b, title, desc } : b
        )
      );
      setEditId(null);
    } else {
      // ➕ ADD
      const newBlog = {
        id: Date.now(),
        title,
        desc,
      };
      setBlogs([newBlog, ...blogs]);
    }

    setTitle("");
    setDesc("");
    setShowForm(false);
  };

  const handleEdit = (blog: any) => {
    setTitle(blog.title);
    setDesc(blog.desc);
    setEditId(blog.id);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setBlogs(blogs.filter((b) => b.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-4">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Dental Blog</h1>

        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          <Pencil size={18} />
          Add Blog
        </button>
      </div>

      {/* FORM */}
      {showForm && (
        <div className="max-w-3xl mx-auto mb-10 bg-white p-6 rounded-xl shadow">
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          />

          <textarea
            placeholder="Blog Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          />

          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {editId ? "Update Blog" : "Publish"}
          </button>
        </div>
      )}

      {/* BLOG LIST */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {blogs.length === 0 && (
          <p className="text-center col-span-3 text-gray-500">
            No blogs yet. Click "Add Blog" to create one.
          </p>
        )}

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {blog.title}
            </h2>
            <p className="text-gray-600 mb-4">{blog.desc}</p>

            <div className="flex justify-between items-center">
              <button
                onClick={() => handleEdit(blog)}
                className="text-blue-600 flex items-center gap-1"
              >
                <Pencil size={16} /> Edit
              </button>

              <button
                onClick={() => handleDelete(blog.id)}
                className="text-red-500 flex items-center gap-1"
              >
                <Trash size={16} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
