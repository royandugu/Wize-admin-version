import CmsDisplay from "../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay";

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/ielts" getLink="/ielts" fetchQueryName="cms-ielts-display"/>
    )
}
export default Page;