import CmsDisplay from "../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay";

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/education/pte" getLink="/education/pte" fetchQueryName="cms-pte-display"/>
    )
}
export default Page;