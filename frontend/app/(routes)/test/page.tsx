import apiTest from "@/app/apis/api-test";

/**
 * Page component that fetches data from an API using the apiTest function.
 * The fetched data is displayed in a paragraph element.
 *
 * @returns {React.JSX.Element} The JSX element representing the page.
 */
export default async function Page(): Promise<React.JSX.Element> {
    // Call the apiTest function to fetch data from the API
    const data = await apiTest();

    // Return a JSX element containing the fetched data in a paragraph
    return <p>{data}</p>;
}