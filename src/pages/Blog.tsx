import { useState } from "react";
import { Pencil } from "lucide-react";

export const Blog = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "How to Maintain Healthy Teeth",
      desc: "Simple daily habits to keep your teeth strong and healthy.",
    },
    {
      id: 2,
      title: "When Do You Need Root Canal Treatment?",
      desc: "Signs that indicate you may need an RCT.",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addBlog = () => {
    if (!title || !desc) return;

    const newBlog = {
      id: Date.now(),
      title,
      desc,
    };

    setBlogs([newBlog, ...blogs]);
    setTitle("");
    setDesc("");
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Dental Blog</h1>

        {/* ✏️ ADD BLOG BUTTON */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
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
            onClick={addBlog}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Publish
          </button>
        </div>
      )}

      {/* BLOG CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {blog.title}
            </h2>
            <p className="text-gray-600 mb-4">{blog.desc}</p>

            <button className="text-blue-600 font-medium">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
