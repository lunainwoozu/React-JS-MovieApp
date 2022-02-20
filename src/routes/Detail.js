import { useCallback, useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import styles from "../App.module.css";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);
    const {id} = useParams();
    const getDetail = useCallback(async () => {
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    )
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  });
  useEffect(() => {
    getDetail();
  }, []);
    return (
        <div>
        {loading ?
        "loading..." : 
        <div>
            <div className="detail_head">
                <img src={detail.background_image} alt={detail.title} />
                <div className="detail_title">
                    <img src={detail.medium_cover_image} alt={detail.title} />
                    <h2>{detail.title}</h2>
                    <h3>{detail.runtime} min</h3>
                    <h3>rating {detail.rating}</h3>
                    <h3>like {detail.like_count}</h3>
                </div>
                <div className="detail_description">
                    <p>{detail.description_full}</p>
                </div>
            </div>
            
        </div>
        }
      </div>
    )
}

export default Detail;