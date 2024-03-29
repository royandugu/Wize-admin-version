import dynamic from "next/dynamic";

const CmsDisplay = dynamic(() => import('../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay'), { ssr: false })

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/education/py" getLink="/education/py" fetchQueryName="cms-py-display"/>
    )
}
export default Page;