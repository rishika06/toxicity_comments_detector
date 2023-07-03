import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function CommentList({ commentList }) {
  return (
    <div className="ttd__comment">
      {commentList &&
        commentList?.map((item) => (
          <div key={item.id} className="ttd__single-comment">
            <p>{item?.comment}</p>
            <div className="ttd__badges">
              {item?.predictions?.map((el) => {
                return (
                  <Stack direction="row" spacing={1}>
                    <Chip
                      label={el?.label}
                      variant="outlined"
                      size="small"
                      color={
                        el?.results[0]?.match === true ? "error" : "success"
                      }
                    />
                  </Stack>
                );
              })}
            </div>
          </div>
        ))}
    </div>
  );
}

export default CommentList;
