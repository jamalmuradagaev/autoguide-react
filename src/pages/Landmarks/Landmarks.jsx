// import { useEffect, useState } from "react";
import { landmarksData } from "../../shared/data/landmarksData";
import { LandmarkCard, Container, Content } from "../../ui";

const Landmarks = () => {
  // const [data, setData] = useState([])

  // const getData = async () => {
  //   const data = await fetch("http://localhost:80/api/BS9Wg0xR/tours/offset=0")
  //   const jsonData = await data.json()
  //   setData(jsonData)
  // }

  // useEffect(() => {
  //   getData()
  // }, [setData])

  // console.log(data)

  return (
    <Container>
        <Content>
      <section>
          {landmarksData.data.length &&
            landmarksData.data.map(
              ({ name, id, description, pathPhoto, location }) => (
                <LandmarkCard
                  key={id}
                  id={id}
                  name={name}
                  description={description}
                  pathPhoto={pathPhoto}
                  location={location}
                />
              )
            )}
      </section>
        </Content>
    </Container>
  );
};

export default Landmarks;
