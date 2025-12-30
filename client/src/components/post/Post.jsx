import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUSer } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUSer._id));
  }, [currentUSer._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.usereId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id / "like", { userId: currentUSer._id });
    } catch (err) {}
    setLike(isLiked ? like + 1 : like - 1);
    setIsLiked(!isLiked);
  };

  return <div></div>;
}

export default Post;
