import React,{useState} from 'react';
import PropTypes from 'prop-types';
import DetailDialog from "../components/DetailsDialog";
import RepoInfo from "./RepoInfo";
import Grid from '@material-ui/core/Grid';

export default function Repos(props){
    const [seeDetail,setSeeDetail] = useState(false);
    const [detail,setDetail] = useState()
    return (
        <>
        {seeDetail && (
            <DetailDialog
                isOpen={seeDetail}
                detailData={detail}
                onClose={()=>setSeeDetail(false)}
            />
        )}
       
            {props.repos.map(repo => (
                <Grid container spacing={1}>
                    <RepoInfo repoName={repo.name} repoDescription={repo.description} knowMoreHandler={()=>{setSeeDetail(true); setDetail(repo)}}/>
                </Grid>
            ))}
        </>
        
    );
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
};
