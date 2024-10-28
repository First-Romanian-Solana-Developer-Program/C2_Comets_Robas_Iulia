fn main() {
    let arr = [1, 2, 3];
    let slice = &arr[1..2];
    println!("{:?}", slice)
}

#[cfg(test)]
mod tests {
    #[test]
    fn slice_out_of_array() {
        let a = [1, 2, 3, 4, 5];

        let nice_slice = &a[1..4];

        assert_eq!([2, 3, 4], nice_slice);
    }
}
