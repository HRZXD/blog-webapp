import { useState, useEffect } from "react";
import Axios from "axios";

function AdminPage() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [IsAdmin, setIsAdmin] = useState();
  const [file, setFile] = useState(null);
  const [topic, setTopic] = useState("");
  const [story, setStory] = useState("");
  const [date, setDate] = useState("");
  const [detail, setDetail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchCreate = async () => {
      try {
        await Axios.post(`${import.meta.env.VITE_KEY}/admin`, {
          username: username,
          password: password,
        }).then((result) => {
          // console.log(result);
          // console.log(username, password);
          if (result) {
            console.log("welcome to Admin");
            setIsAdmin(true);
          }
        });
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };
    fetchCreate();
  };
  const handleSubmitBlog = (e) => {
    e.preventDefault();
    const fetchCreate = async () => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("topic", topic);
      formData.append("story", story);
      formData.append("date", date);
      formData.append("detail", detail);

      try {
        await Axios.post(`${import.meta.env.VITE_KEY}/blogs`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then(() => {
          console.log("Render complete");
          // console.log(result);
          // console.log(topic, story, date, detail);
        });
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };
    fetchCreate();
  };
  return (
    <div>
      {!IsAdmin ? (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Admin Login
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="text-lg block w-full rounded-md border-0 pl-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-lg block w-full rounded-md border-0 pl-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md px-3 py-1.5 btn btn-xs sm:btn-sm md:btn-md lg:btn-base"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-24">
          <form onSubmit={handleSubmitBlog}>
            <div className="text-4xl font-bold pb-5">Post Form</div>
            <div className="section">
              <label htmlFor="topic" className="font-bold">
                Topic
              </label>
              <input
                type="text"
                name="topic"
                id="topic"
                onChange={(e) => setTopic(e.target.value)}
                className="input input-bordered w-full max-w-xs mt-2 mb-4"
              />
            </div>
            <div className="section">
              <label htmlFor="story" className="font-bold">
                Story
              </label>
              <textarea
                name="story"
                id="story"
                onChange={(e) => setStory(e.target.value)}
                className="input input-bordered w-full max-w-xs mt-2 mb-4"
              ></textarea>
            </div>
            <div className="section">
              <label htmlFor="date" className="font-bold">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                onChange={(e) => setDate(e.target.value)}
                className="input input-bordered w-full max-w-xs mt-2 mb-4"
              />
            </div>
            <div className="section">
              <label htmlFor="file-upload" className="font-bold">
                Picture
              </label>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="mt-2 ml-2 mb-4"
              />
            </div>
            <div className="section">
              <label htmlFor="detail" className="font-bold">
                Detail
              </label>
              <textarea
                name="detail"
                id="datail"
                onChange={(e) => setDetail(e.target.value)}
                className="input input-bordered w-full max-w-xs mt-2 mb-4"
              ></textarea>
            </div>
            <button type="submit" className="btn w-[23em]">
              Post
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
