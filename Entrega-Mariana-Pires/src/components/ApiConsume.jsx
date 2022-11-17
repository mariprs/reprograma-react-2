import { useState, useEffect } from 'react'
import Axios from 'axios'

export function ConsumeRepos () {
    const baseURL = 'https://api.github.com/users/mariprs/repos'
    const [reposFromAPI, setReposFromApi] = useState([])
    const [searchedWord, setSearchedWord] = useState('')
    const [filteredRepos, setFilteredRepos] = useState([])
    
    useEffect(() => {
        async function getData() {
            const response = await Axios.get(baseURL)
            setReposFromApi(response.data)
        }
        getData()
    }, [])
    
    // return(
    //     reposFromAPI.map((item) => {
    //         return(
    //             <div key={item.id}>
    //                 <p>{item.name}</p>
    //             </div>
    //         )
    //         })
    // )
    
    function handleSearch(event) {
        setSearchedWord(event.target.value)
    }
    
    useEffect(() => {
        const filtered = reposFromAPI.filter(reposFromAPI => {
            return reposFromAPI.name.includes(searchedWord)
        })
        setFilteredRepos(filtered)}, [reposFromAPI, searchedWord])
        
        return(
            <>
            <input placeholder="Digite o nome de um repositório" onChange={handleSearch} />
            {filteredRepos.map (reposFromAPI => {
                return(
                    <div>
                        <h1 key={reposFromAPI.name}>{reposFromAPI.name}</h1>
                        <h2 key={reposFromAPI.description}>{reposFromAPI.description}</h2>

                        <a href={reposFromAPI.url}>➡️Clique aqui para acessar</a>
                    </div>
                )
            })}
            </>
        )
    }
    
    
    