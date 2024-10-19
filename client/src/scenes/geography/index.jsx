import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetGeographyQuery } from "../../state/api";
import Header from "../../components/Header";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "../../state/geoData";

const Geography = () => {
  const theme = useTheme();
  const { data } = useGetGeographyQuery();

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="GEOGRAPHY" subtitle="Find where your users are located." />
      <Box
        mt="40px"
        height="75vh"
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
      >
        {data ? (
          <ResponsiveChoropleth
            data={data}
            theme={{
              axis: {
                domain: {
                  line: {
                    stroke: theme.palette.secondary[200],
                  },
                },
                legend: {
                  text: {
                    fill: theme.palette.secondary[200],
                  },
                },
                ticks: {
                  line: {
                    stroke: theme.palette.secondary[200],
                    strokeWidth: 1,
                  },
                  text: {
                    fill: theme.palette.secondary[200],
                  },
                },
              },
              legends: {
                text: {
                  fill: theme.palette.secondary[200],
                },
              },
              tooltip: {
                container: {
                  color: theme.palette.primary.main,
                },
              },
            }}
            features={geoData.features}
            margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
            domain={[0, 60]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={150}
            projectionTranslation={[0.45, 0.6]}
            projectionRotation={[0, 0, 0]}
            borderWidth={1.3}
            borderColor="#ffffff"
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: true,
                translateX: 0,
                translateY: -125,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: theme.palette.secondary[200],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: theme.palette.secondary[200],
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            projectionType="mercator" // Add this line to specify the projection type
            fillColor={"hsl(200, 70%, 50%)"} // Example fill colorline to specify the fill color
            graticuleLineWidth={1} // Example graticule line width
            enableGraticule={false}
            // Add any additional props you may need
            graticuleLineColor="#ffffff" // Set this to your desired color
            isInteractive={true} // Set this to true or false
            onMouseEnter={() => {}} // Passing an empty function
            onMouseMove={() => {}} // Passing an empty function
            onMouseLeave={() => {}} // Passing an empty function
            onClick={() => {}} // Passing an empty function
            layers={['graticule', 'features', 'legends']}
            role="region" // Add the required role prop here
            // Define the match and value properties here
            // match={{
            //   id: "id", // This should match the unique identifier in your data and geoData
            // }}
            // value="value" // This should match the key in your data representing the value to visualize
            // colors={[
            //   theme.palette.primary[100],
            //   theme.palette.primary[200],
            //   theme.palette.primary[300],
            //   theme.palette.primary[400],
            //   theme.palette.primary[500],
            //   theme.palette.secondary[100],
            //   theme.palette.secondary[200],
            //   theme.palette.secondary[300],
            //   theme.palette.secondary[400],
            //   theme.palette.secondary[500],
            // ]}
            //di nako, atleast we tried T_T
          />
        ) : (
          <>Loading...</>
        )}
      </Box>
    </Box>
  );
};

export default Geography;