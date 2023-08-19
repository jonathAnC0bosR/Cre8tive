import { FacebookEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';
import { TwitterEmbed } from 'react-social-media-embed';
import { PinterestEmbed } from 'react-social-media-embed';

const SocialMedia = () => {
    return (<><div><h1>Portfolio page </h1></div>
        
        
        <br></br>
        <br></br>
        <br></br>
        {/* // Code for embed media

        // Instagram examples */}
        <div>
            <br></br>
            <h1>This is an Instagram  example [Videos and Photos] </h1></div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InstagramEmbed url="https://www.instagram.com/p/CtwQ7X6qsdf/" width={328} />
            <InstagramEmbed url="https://www.instagram.com/p/CvUV8kgvYNy/" width={328} />
            <InstagramEmbed url="https://www.instagram.com/p/CvH8urhgZFX/" width={328} />
        </div>

        {/* // Twitter examples */}
        <div>
            <br></br>
            <h1>This is a Twitter  example [Videos and Photos] </h1></div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <TwitterEmbed url="https://twitter.com/solisolsoli/status/1691185423417241600" width={325} />
                <TwitterEmbed url="https://twitter.com/cfm_miku/status/1691412167281827840" width={325} />
                <TwitterEmbed url="https://twitter.com/LaMatemaga/status/1690770535477657600" width={325} />
                <TwitterEmbed url="https://twitter.com/catshouldnt/status/1691565488411959782" width={325} />
            </div>

        {/* // Twitter examples */}
        <div>
            <br></br>
            <h1>This is a Twitter  example [Videos and Photos] </h1></div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <PinterestEmbed url="https://www.pinterest.com.mx/pin/4362930881798476/" 
                    width={345}
                    height={467}
                />
                <PinterestEmbed url="https://www.pinterest.com.mx/pin/154037249749720268/" 
                    width={345}
                    height={467}
                />
                <PinterestEmbed url="https://www.pinterest.com.mx/pin/5418462044367227/" 
                    width={345}
                    height={467}
                />
                <PinterestEmbed url="https://www.pinterest.com.mx/pin/1125968650263409/" 
                    width={345}
                    height={467}
                />
                <PinterestEmbed url="https://www.pinterest.com.mx/pin/66850375711258130/" 
                    width={345}
                    height={467}
                />
            </div>
        

        {/* //Facebook examples */}
        <div>
            <br></br>
            <h1>This is a Facebook example [Videos] </h1></div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <FacebookEmbed url="https://www.facebook.com/bjork/videos/771824787960913/" width={500} />
            <FacebookEmbed url="https://www.facebook.com/silviaperezcruz/videos/7151091918254201/" width={500} />
            <FacebookEmbed url="https://www.facebook.com/habibi.band/videos/1355005731626415/" width={500} />
        </div>
        <div>
            <br></br>
            <h1>This is a Facebook example [Photos] </h1></div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <FacebookEmbed url="https://www.facebook.com/makabresku.fairy.tales/posts/pfbid0m7tTpzgGTNuWJMqax2zV4kgbcWvb297GUgBP8rxyxCCPZ4tod2bvK6Y4bi3Yydpbl" width={500} />
            <FacebookEmbed url="https://www.facebook.com/makabresku.fairy.tales/posts/pfbid0dPadR3VRVrB2DgdxKSqf8b31fcXBoLPXxDFqjLmi6KaDsCtTgrV5L6cYkxoKyKj8l" width={500} />
            <FacebookEmbed url="https://www.facebook.com/photo.php?fbid=834890898197443&set=a.834891798197353&type=3" width={500} />
            <FacebookEmbed url="https://www.facebook.com/sheidlinaelena/posts/pfbid02uShqjmTjLtG1qwgikas7pdunS6nigrgS62pQx2vT4tNKFhcfrZpoyvwbDH7pjr3jl" width={500} />
        </div>

        
        </>

        

        
    
    )
}

export default SocialMedia;