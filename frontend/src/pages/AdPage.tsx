import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdService from "../components/API/AdService";
import { useFetchingById } from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";
import { Advertisment } from "../types/types";
import AdCard from "../components/AdCard";

const AdPage = () => {

    const params = useParams();
    const [ad, setAd] = useState<Advertisment>({
        id: '', 
        name: '',
        description: '',
        price: 0,
        createdAt: '',
        views: 0,
        likes: 0,
        imageUrl: '',
    });

    const [fetchAdById, isLoading, error] = useFetchingById(async (id: string) => {
        const response = await AdService.getById(id);
        setAd(response);
    })

    useEffect(() => {
        if (params.id) {
            fetchAdById(params.id);
        }
    }, [])

    return(<>
            {isLoading
            ? <Loader />
            : <AdCard error={error} ad={ad}/> }
        </>
    )
}

export default AdPage;