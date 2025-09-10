import { useEffect, useState } from "react";
import type { news } from "../types/types";
import axios from "axios";
import type { AxiosResponse } from "axios"; // IMPORTAR SOLO EL TIPO
import "../styles/news.css";

export const News = () => {
  const [news, setNews] = useState<news[]>([]);
  const [chargeNews, setChargeNews] = useState(true);

  const API_LINK = import.meta.env.VITE_API_LINK;

  useEffect(() => {
    axios
      .get<news[]>(`${API_LINK}/api/news`)
      .then((response: AxiosResponse<news[]>) => {
        setNews(response.data);
        setChargeNews(false);
      })
      .catch((error: unknown) => {
        console.error(error);
        setChargeNews(false);
      });
  }, []);

  return (
    <div>
      <h1 className="news-title">
        DISFRUTA DE LO NUEVO QUE TRAEMOS ESTE MES PARA TI
      </h1>
      {chargeNews ? (
        <p className="cargando">Cargando noticias...</p>
      ) : (
        <div className="news-container">
          {news.map((item) => (
            <div className="news-card" key={item.id}>
              <img src={item.link} alt={item.link} />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
