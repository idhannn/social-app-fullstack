"use client";
import axios from "axios";
import { useAppDispatch } from "./hooks";
import { updateUser } from "./dataSLice";
import { useEffect, useState } from "react";

export const useUserById = (id: string) => {
  const [data, setData] = useState(null);
  const dispatch = useAppDispatch();

  const getUser = async () => {
    const res = await axios.get(`/api/user/${id}`);
    const data = await res.data;
    setData(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(updateUser({ userData: data }));
    }
  }, [data]);

  return {
    data,
  };
};
