import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const DetailsSkeleton = ({
}) => {
  return (
    <>
      <section className="details-container">
        <h1 className="details-title">
          <p className="topic">
            <Skeleton
              width={"100%"}
              baseColor="#202020"
              highlightColor="#444"
            />
          </p>
        </h1>
        <p className="date">
          
            <Skeleton
              width={"100px"}
              baseColor="#202020"
              highlightColor="#444"
            />
          </p>
      
        <Skeleton height={'500px'} width={"100%"} baseColor="#202020" highlightColor="#444" />
        <div className="table-container">
          <table>
            <tbody>
              <tr>
                <td>
                  <h4>Description:</h4>
                </td>
                <td>
                  <p>
                    <Skeleton
                      width={"100%"}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Homepage:</h4>
                </td>
                <td>
                  <p>
                    <Skeleton
                      width={"100%"}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Stargazers Count:</h4>
                </td>
                <td>
                  <p>
                    <Skeleton
                      width={"100%"}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Language:</h4>
                </td>
                <td>
                  <p>
                    <Skeleton
                      width={"100%"}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Watchers Count:</h4>
                </td>
                <td>
                  <p>
                    <Skeleton
                      width={"100%"}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Open Issues Count:</h4>
                </td>
                <td>
                  <p>
                    <Skeleton
                      width={"100%"}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Visibility</h4>
                </td>
                <td>
                  <p>
                    <Skeleton
                      width={"100%"}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Forks</h4>
                </td>
                <td>
                  <p>
                    <Skeleton
                      width={"100%"}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Open Issues</h4>
                </td>
                <td>
                  <p>
                    <Skeleton
                      width={"100%"}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Default Branch</h4>
                </td>
                <td>
                  <p>
                    <Skeleton
                      width={"100%"}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Topics:</h4>
                </td>
                <td>
                  <div className="topics-container">
                    <p className="topic">
                      <Skeleton
                        width={"20px"}
                        baseColor="#202020"
                        highlightColor="#444"
                      />
                    </p>
                    <p className="topic">
                      <Skeleton
                        width={"20px"}
                        baseColor="#202020"
                        highlightColor="#444"
                      />
                    </p>
                    <p className="topic">
                      <Skeleton
                        width={"20px"}
                        baseColor="#202020"
                        highlightColor="#444"
                      />
                    </p>
                    <p className="topic">
                      <Skeleton
                        width={"20px"}
                        baseColor="#202020"
                        highlightColor="#444"
                      />
                    </p>
                    <p className="topic">
                      <Skeleton
                        width={"20px"}
                        baseColor="#202020"
                        highlightColor="#444"
                      />
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default DetailsSkeleton;
