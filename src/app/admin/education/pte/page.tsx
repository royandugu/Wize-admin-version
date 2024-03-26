import CmsDisplay from "../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay";

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/pte" getLink="/pte" fetchQueryName="cms-pte-display"/>
    )
}
export default Page;