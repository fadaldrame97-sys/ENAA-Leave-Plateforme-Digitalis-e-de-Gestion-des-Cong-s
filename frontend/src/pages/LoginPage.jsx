import { useState } from "react";
import api from "../services/api";

export default function LoginPage({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await api.post("/login", { email, password });
      localStorage.setItem("token", response.data.token);
      onLoginSuccess(response.data.user);
    } catch (err) {
      setError("Identifiants incorrects.");
    } finally {
      setLoading(false);
    }
  };